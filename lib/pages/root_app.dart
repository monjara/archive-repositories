import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RootApp extends StatefulWidget {
  @override
  _RootAppState createState() => _RootAppState();
}

class _RootAppState extends State<RootApp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // backgroundColor: Colors.black,
      bottomNavigationBar: getFooter(),
    );
  }

  Widget getFooter() {
    List bottomItems = [
      "assets/images/home.svg",
      "assets/images/search.svg",
      "assets/images/plus.svg",
      "assets/images/heart.svg",
      "assets/images/man.svg",
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
            return SvgPicture.asset(bottomItems[index], width: 26,color: Colors.white,);
          }),
        ),
      )
    );
  }
}
