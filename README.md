# YOUTUBE-SUMMARIZER
Mini Project 


Overview:

The YouTube Transcript Summarizer is a project aimed at providing users with a convenient tool for summarizing YouTube video transcripts. 

This project consists of a Chrome extension and a Flask web application, working together to offer a seamless summarization experience.

Features:

Chrome Extension Interface: The project includes a Chrome extension that integrates directly into the browser, allowing users to summarize YouTube video transcripts with a single click.

Transcript Retrieval: The extension retrieves the transcript of the currently active YouTube video using the YouTube Transcript API. This ensures that the summarization process is based on the most up-to-date content available.

Summarization Algorithm: The summarization algorithm utilizes the Hugging Face transformers library, employing advanced natural language processing techniques to generate concise summaries of the video transcript.

Flask Backend: The project incorporates a Flask web application as a backend server, facilitating communication between the Chrome extension and the summarization algorithm. This ensures efficient handling of requests and responses.

Getting Started:

To use the YouTube Transcript Summarizer:

Install the Chrome extension by loading it into your browser from the extension manager.

Ensure that the Flask web application is running locally on your machine.

Open a YouTube video and click the "Summarise" button provided by the extension.

The extension will communicate with the Flask server to retrieve the transcript, summarize it, and display the summary in the extension interface.

Dependencies:

Python 3.x

Flask

YouTube Transcript API

Hugging Face transformers library

Chrome Browser


Contributing:

Contributions to the project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.



Acknowledgements:

Thanks to the creators of the YouTube Transcript API and the Hugging Face transformers library for providing valuable tools for this project.
Special thanks to the contributors and maintainers of the Flask web framework for their efforts in developing and maintaining a powerful and versatile framework.
