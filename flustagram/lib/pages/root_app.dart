import 'package:flustagram/pages/home_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RootApp extends StatefulWidget {
  @override
  _RootAppState createState() => _RootAppState();
}

class _RootAppState extends State<RootApp> {
  int pageIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: getAppBar(),
      backgroundColor: Colors.black,
      body: getBody(),
      bottomNavigationBar: getFooter(),
    );
  }
  Widget getBody() {
    List<Widget> pages = [
      HomePage(),
      Center(
          child: Text("Home Page", style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),)
      ),
      Center(
          child: Text("Search Page", style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),)
      ),
      Center(
          child: Text("Upload Page", style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),)
      ),
      Center(
          child: Text("Activity Page", style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),)
      ),
      Center(
          child: Text("Account Page", style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),)
      ),
    ];
    return IndexedStack(
      index: pageIndex,
      children: pages,
    );
  }

  Widget getAppBar() {
    if (pageIndex == 0) {
      return AppBar(
        backgroundColor: Colors.black,
       title: Row(
         mainAxisAlignment: MainAxisAlignment.spaceBetween,
         children: <Widget>[
           SvgPicture.asset("assets/images/camera.svg", width: 30,),
           Text("Flustagram", style: TextStyle(
             fontFamily: "Billabong",
             fontSize: 35
           )),
           SvgPicture.asset("assets/images/airplain.svg", width: 30,),
         ],
       )
      );
    } else if (pageIndex == 1) {
      return null;
    } else if (pageIndex == 2) {
      return AppBar(
        centerTitle: true,
        backgroundColor: Colors.black,
        title: Text("Upload"),
      );
    } else if (pageIndex == 3) {
      return AppBar(
        centerTitle: true,
        backgroundColor: Colors.black,
        title: Text("Activity"),
      );
    } else {
      return AppBar(
        centerTitle: true,
        backgroundColor: Colors.black,
        title: Text("Account"),
      );
    }
  }

  Widget getFooter() {
    List bottomItems = [
      pageIndex == 0 ? "assets/images/home_active.svg"
                     : "assets/images/home.svg",
      pageIndex == 1 ? "assets/images/search_active.svg"
                     : "assets/images/search.svg",
      pageIndex == 2 ? "assets/images/plus_active.svg"
                     : "assets/images/plus.svg",
      pageIndex == 3 ? "assets/images/heart_active.svg"
                     : "assets/images/heart.svg",
      pageIndex == 4 ? "assets/images/person_active.svg"
                     : "assets/images/person.svg",
    ];

    return Container(
      width: double.infinity,
      height: 80,
      decoration: BoxDecoration(
        color: Colors.black,
      ),
      child: Padding(
        padding: const EdgeInsets.only(left: 20, right: 20, top: 15, bottom: 20),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: List.generate(bottomItems.length, (index) {
            return InkWell(
              onTap: () => selectedTab(index),
              child: SvgPicture.asset(bottomItems[index], width: 36, color: Colors.white,),
            );
          }),
        ),
      )
    );
  }
  selectedTab(index){
    setState(() {
      pageIndex = index;
    });
  }
}
