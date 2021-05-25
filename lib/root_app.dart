import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:portfolio/theme.dart';
import 'package:portfolio/views/about.dart';
import 'package:portfolio/views/contact.dart';
import 'package:portfolio/views/home.dart';
import 'package:portfolio/views/works.dart';

class RootApp extends StatefulWidget {
  @override
  _RootAppState createState() => _RootAppState();
}

class _RootAppState extends State<RootApp> {
  int pageIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          getSideBar(context),
          getHomeBody(),
        ],
      ),
    );
  }

  Widget getBody() {
    List<Widget> pages = [getHomeBody(), Works(), About(), Contact()];
    return IndexedStack(
      index: pageIndex,
      children: pages,
    );
  }

  Widget getSideBar(BuildContext context) {
    final double deviceHeight = MediaQuery.of(context).size.height;

    List linkTitles = ["Home", "Works", "About", "Contact"];

    return Container(
      height: deviceHeight,
      constraints: BoxConstraints(
        maxWidth: 400,
        minWidth: 200,
      ),
      child: Container(
        color: HexColor("fddbd0"),
        width: desktopSideBarWidth(context: context),
        child: Column(
          children: [
            const SizedBox(height: 64),
            SvgPicture.asset(
              "assets/images/logo.drawio.svg",
              height: 48,
            ),
            const SizedBox(height: 8),
            Semantics(
              container: true,
              child: Text(
                'PORTFOLIO',
                style: Theme.of(context).textTheme.headline6,
              ),
            ),
            for (var i=0; i<linkTitles.length; i++)
              Semantics(
                button: true,
                enabled: true,
                child: GestureDetector(
                  onTap: () => selectedTab(i),
                  child: _buttonText(linkTitles[i]),
                ),
              )
          ],
        )
      ),
    );
  }

  selectedTab(index) {
    setState(() {
      pageIndex = index;
    });
  }
}

double desktopSideBarWidth({
  required BuildContext context,
}) {
  double width = MediaQuery.of(context).size.width;
  return width * 0.15;
}

Widget _buttonText(String caption) {
  return Padding(
    padding: const EdgeInsets.symmetric(vertical: 16),
    child: Text(
      caption,
      textAlign: TextAlign.center,
    ),
  );
}
