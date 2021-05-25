import 'package:flutter/material.dart';
import 'package:portfolio/views/sidebar.dart';

class Works extends StatefulWidget {
  @override
  _WorksState createState() => _WorksState();
}

class _WorksState extends State<Works> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          Sidebar(),
          Container(
            child: Column(
              children: [
                Text("Works"),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
