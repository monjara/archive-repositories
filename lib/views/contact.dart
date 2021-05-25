import 'package:flutter/material.dart';
import 'package:portfolio/views/sidebar.dart';

class Contact extends StatefulWidget {
  @override
  _ContactState createState() => _ContactState();
}


class _ContactState extends State<Contact> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          Sidebar(),
          Container(
            child: Column(
              children: [
                Text("Contact"),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
