import 'package:flutter/material.dart';
import 'package:portfolio/theme.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          width: 300,
          color: HexColor('fddbd0'),
        )
      ],
    );
  }
}
