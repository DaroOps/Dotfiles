#!/usr/bin/env bash

# Terminate already running bar instances
polybar-msg cmd quit

# Check if xrandr is available
if type "xrandr"; then
  # Loop through connected monitors and launch Polybar on each
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
    MONITOR=$m polybar --reload bar1 &
  done
else
  # Fallback: Launch Polybar without specifying a monitor
  polybar --reload bar1 &
fi
