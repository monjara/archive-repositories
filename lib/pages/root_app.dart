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
      // backgroundColor: Colors.black,
      bottomNavigationBar: getFooter(),
    );
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
