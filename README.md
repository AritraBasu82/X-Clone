# X (Twitter) Clone

A responsive, front-end clone of the X (formerly Twitter) user interface. This project replicates the core layout of the platform and includes interactive JavaScript functionality for post interactions like Liking and Retweeting.

**Live Here** https://aritrabasu82.github.io/X-Clone/

## 🚀 Features

* **Responsive Layout:**
    * **Left Sidebar:** Navigation links, "Post" button, and User Profile.
    * **Main Feed:** Scrollable feed area with a sticky header and tweet input box.
    * **Right Widgets:** Search bar, "Subscribe to Premium" card, and Trending topics.
* **Interactive Elements (JavaScript):**
    * **Like Button:** Toggles the heart icon (solid/outline) and updates the like count dynamically.
    * **Retweet Button:** Toggles the retweet icon color (green) and updates the retweet count.
    * **Comment Button:** Triggers a placeholder alert for comment functionality.
    * **Hover Effects:** CSS transitions for buttons, trends, and tweets to mimic the native feel.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for the sidebar, feed, and widgets.
* **CSS3:** Flexbox for layout, sticky positioning for headers, and styling to match the "X" branding (fonts, colors, borders).
* **JavaScript (Vanilla):** DOM manipulation and event delegation to handle user interactions without a backend.
* **FontAwesome:** Used for all icons (Home, Bell, Envelope, User, Heart, Retweet, etc.).

## 📂 File Structure

```text
x-clone/
│
├── index.html      # Main HTML structure
├── style.css       # Styling for layout and components
├── script.js       # Logic for Likes, Retweets, and Comments
└── README.md       # Project documentation
