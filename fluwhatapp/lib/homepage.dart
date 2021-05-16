import 'package:flutter/material.dart';
import 'package:camera/camera.dart';
import 'package:fluwhatapp/pages/call_page.dart';
import 'package:fluwhatapp/pages/camera_page.dart';
import 'package:fluwhatapp/pages/chat_page.dart';
import 'package:fluwhatapp/pages/status_page.dart';

class HomePage extends StatefulWidget {
  final List<CameraDescription> cameras;
  HomePage({this.cameras});

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with SingleTickerProviderStateMixin {
  TabController _tabController;
  bool showFab = true;
  bool isCallsPage = true;

  @override
  void initState() {
    super.initState();

    _tabController = TabController(vsync: this, initialIndex: 1, length: 4);
    _tabController.addListener(() {
     if (_tabController.index == 1) {
       showFab = true;
       isCallsPage = false;
     } else if (_tabController.index == 3) {
       showFab = true;
       isCallsPage = true;
     } else {
       showFab = false;
       isCallsPage = false;
     }
     setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('fluwhatapp'),
        elevation: 0.7,
        bottom: TabBar(
          controller: _tabController,
          indicatorColor: Colors.white,
          tabs: <Widget>[
            Tab(icon: Icon(Icons.camera_alt)),
            Tab(text: "CHATS"),
            Tab(text: "STATUS"),
            Tab(text: "CALLS"),
          ],
        ),
        actions: <Widget>[
          Icon(Icons.search),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 5.0),
          ),
          Icon(Icons.more_vert),
        ],
      ),
      body: TabBarView(
        controller: _tabController,
        children: <Widget>[
          CameraPage(widget.cameras),
          ChatPage(),
          StatusPage(),
          CallsPage(),
        ],
      ),
      floatingActionButton: showFab
          ? FloatingActionButton(
        backgroundColor: Theme.of(context).accentColor,
        child: isCallsPage ? Icon(
          Icons.add_call,
          color: Colors.white,
        ) : Icon(
          Icons.message,
          color: Colors.white,
        ),
        onPressed: () => print("fab clicked"),
      )
          : null,
    );
  }
}