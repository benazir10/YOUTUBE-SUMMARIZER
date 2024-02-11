from flask import Flask, request
from youtube_transcript_api import YouTubeTranscriptApi
from transformers import pipeline
app = Flask(__name__)
@app.get('/summary')
def summary_api():
  url = request.args.get('url', '')
video_id = url.split('=')[1]
summary = get_summary(get_transcript(video_id))



