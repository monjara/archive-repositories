LTKII=$(xinput list | grep II)
if [ LTKII = 0 ]; then
xinput set-button-map "Lenovo TrackPoint Keyboard II Mouse" 1 0 3 4 5 6 7
fi
