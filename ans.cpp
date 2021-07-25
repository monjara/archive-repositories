#include <bits/stdc++.h>
//@formatter:off
using namespace std;
template<class T> inline bool chmin(T& a, T b) { if (a > b) { a = b; return true; } return false; }
template<class T> inline bool chmax(T& a, T b) { if (a < b) { a = b; return true; } return false; }
typedef long long ll;
//@formatter:on

int main() {
    double a, b;
    cin >> a >> b;
    double c = (a - b) / 3 + b;
    cout << fixed << setprecision(15) << c << endl;
    return 0;
}