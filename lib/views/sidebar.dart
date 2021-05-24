import 'package:flutter/material.dart';
import 'package:portfolio/theme.dart';

class Sidebar extends StatefulWidget {
  @override
  _SidebarState createState() => _SidebarState();
}

class _SidebarState extends State<Sidebar> {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Container(
        color: HexColor("fddbd0"),
        width: desktopSideBarWidth(context: context),
      ),
    );
  }
}
