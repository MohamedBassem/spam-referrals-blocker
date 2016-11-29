#Spam Referrals Blocker
Spam referrals is a tiny Js library that is developed to remove the hassle of updating your Google Analytics filters with urls spamming your referral results. It's extremely useful for websites that you don't have control on its web server, GitHub pages for instance.

### How to use it?
- Add `<script src="https://github.com/MohamedBassem/spam-referrals-blocker/releases/download/v0.2/spam-referrals-blocker.min.js"></script>` to your footer before loading Google Analytics' script.
- Wrap your Google analytics code with:
```js
  if( !isSpamReferral() ){
    // Your google analytics code goes here.
  }
```

An Example from my jekyll blog hosted on github pages [Here](https://github.com/MohamedBassem/MyBlog/blob/gh-pages/_includes/footer.html#L13-L24).

### How it works?
The idea simply is that this repo will use this [community-contributed list](https://github.com/piwik/referrer-spam-blacklist) to create a JS file which will block the spam referral for you. The library will then be updated with the new urls but with the same download url. By having the script automatically included in your website you won't have to update the spam referral list in your Google Analytics anymore, it will be automatically done for you.

### How to contribute?
Your issues, pull requests, ideas are welcomed!
