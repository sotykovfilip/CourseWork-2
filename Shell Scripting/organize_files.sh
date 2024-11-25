#!/bin/bash

# Define an array of sample filenames
files=("document.txt" "photo.jpg" "report.pdf" "image.png" "notes.docx" "presentation.pptx") 
echo "The Current Files:" # Print a message indicating the current files

for file in ${files[@]}; do  # Loop through each file 
        echo $file           # Print the file name
done                         # End the for loop

echo                        # Print a blank line for spacing
echo "Moving files..."      # Print a message indicating the files are being moved
echo                        # Print a blank line for spacing

for file in "${files[@]}"; do                           # Loop through each file
    if [[ $file == *.txt ]]; then                       # Check if the file is a text file
        echo "Moving $file to Text_Files folder"        # Print a message indicating the file is being moved
    elif [[ $file == *.jpg ]]; then                     # Check if the file is a JPG image
        echo "Moving $file to Images folder"
    elif [[ $file == *.pdf ]]; then                     # Check if the file is a PDF document
        echo "Moving $file to PDF_Files folder"
    elif [[ $file == *.png ]]; then                     # Check if the file is a PNG image  
        echo "Moving $file to PNG_Files folder"
    elif [[ $file == *.docx ]]; then                    # Check if the file is a Word document
        echo "Moving $file to Word_Documents folder"
    elif [[ $file == *.pptx ]]; then                    # Check if the file is a PowerPoint presentation
        echo "Moving $file to Presentations folder"
    else                                                # If the file type is anything else
        echo "File type of $file is unknown, skipping..." # Print a message indicating the file type is unknown
    fi                                                  # End the if-elif-else statement
done                                                    # End the for loop
