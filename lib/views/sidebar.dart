import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:portfolio/theme.dart';

double desktopSideBarWidth({
  required BuildContext context,
}) {
  double width = MediaQuery.of(context).size.width;
  return width * 0.15;
}

class Sidebar extends StatefulWidget {
  @override
  _SidebarState createState() => _SidebarState();
}

class _SidebarState extends State<Sidebar> {
  @override
  Widget build(BuildContext context) {
    const linkTitles = ["Home", "Works", "About", "Contact"];
    return ConstrainedBox(
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
            const Spacer(),
            //for (var linkTitle in linkTitles) {
           // }
          ],
        ),
      ),
    );
  }
}
