#!/bin/bash

get_brightness() {
    current_brightness=$(brightnessctl get)
    max_brightness=$(brightnessctl max)
    percentage=$((current_brightness * 100 / max_brightness))
    echo "$percentage"
}

case "$1" in
  "up")
    new_brightness=$(($(get_brightness) + 5))
    if [ "$new_brightness" -gt 100 ]; then
        new_brightness=100
    fi
    brightnessctl set "$new_brightness"% > /dev/null
    ;;
  "down")
    new_brightness=$(($(get_brightness) - 5))
    if [ "$new_brightness" -lt 1 ]; then
        new_brightness=1
    fi
    brightnessctl set "$new_brightness"% > /dev/null
    ;;
  "status")
    echo "$(get_brightness)"
    ;;
esac

