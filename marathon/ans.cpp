#include <bits/stdc++.h>
//@formatter:off
using namespace std;
template<class T> inline bool chmin(T& a, T b) { if (a > b) { a = b; return true; } return false; }
template<class T> inline bool chmax(T& a, T b) { if (a < b) { a = b; return true; } return false; }
typedef long long ll;
//@formatter:on

int main() {
    int d;
    cin >> d;
    vector<int> c(26);
    vector<vector<int>> s(d, vector<int>(26));
    vector<int> t(d);
    vector<int> last(26, -1);
    for (int i = 0; i < 26; i++) cin >> c.at(i);
    for (int i = 0; i < d; i++) for (int j = 0; j < 26; j++) cin >> s.at(i).at(j);
    for (int i = 0; i < d; i++) cin >> t.at(i);
    for (int i = 0; i < d; i++) t.at(i)--;
    ll happy = 0;
    for (int i = 0; i < d; i++) {
        happy += s.at(i).at(t.at(i));
        last.at(t.at(i)) = i;
        for (int j = 0; j < 26; j++) {
            happy -= c.at(j) * (i - last.at(j));
        }
        cout << happy << endl;
    }
    return 0;
}