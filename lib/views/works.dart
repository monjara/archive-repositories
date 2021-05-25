import 'package:flutter/material.dart';

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
