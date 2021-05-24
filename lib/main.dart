import 'package:flutter/material.dart';
import 'package:portfolio/theme.dart';
import 'package:portfolio/views/home.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'monjara portfolio',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: HexColor('fddbd0'),
        primarySwatch: Colors.pink,
      ),
      home: Home(),
    );
  }
}