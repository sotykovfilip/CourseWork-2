#!/bin/bash

# Define the disk usage percentage and threshold value
disk_usage=85           # Disk usage percentage
threshold=80            # Threshold value

# Compare disk usage to the threshold
if (( disk_usage > threshold )); then                                                               # Check if disk usage is greater than the threshold
    echo "Warning: Disk usage is at ${disk_usage}%, which exceeds the threshold of ${threshold}%!"  # Print a warning message
else                                                                                                # If disk usage is within the acceptable range
    echo "Disk usage is at ${disk_usage}%, which is within the acceptable range."                   # Print a message indicating disk usage is within the acceptable range
fi                                                                                                  # End the if-else statement       