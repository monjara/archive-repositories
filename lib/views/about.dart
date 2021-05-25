import 'package:flutter/material.dart';
import 'package:portfolio/views/sidebar.dart';

class About extends StatefulWidget {
  @override
  _AboutState createState() => _AboutState();
}

class _AboutState extends State<About> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          Sidebar(),
          Container(
            child: Column(
              children: [
                Text("About"),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
