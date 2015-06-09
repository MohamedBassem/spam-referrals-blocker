#Spam Referrals Blocker
Spam referrals is a tiny Js library that is developed to remove the hassle of updating your Google Analytics filters with urls spamming your referral results. It's extremely useful for websites that you don't have control on its web server, Github pages for instance.

### How to use it?
- Add `<script src="https://github.com/MohamedBassem/spam-referrals-blocker/releases/download/v0.1/spam-referrals-blocker.js.min"></script>` to your footer before loading Google analytics' script.
- Wrap your Google analytics code with:
```js
  if( !isSpamReferral() ){
    // Your google analytics code goes here.
  }
```

An Example from my jekyll blog hosted on github pages [Here](https://github.com/MohamedBassem/MyBlog/blob/gh-pages/_includes/footer.html#L13-L24).

### How it works?
The idea simply is that this repo will be used to collect spam referrals by users' contributions. The library will then be updated with the new urls. By having the script automatically included in your website you won't have to update the spam referral list in your google analytics anymore, it will be automatically done for you.

### How to contribute?
This project is based heavily on contributions. Your contributions with urls, code or ideas are welcomed. Just fork the repo and create a pull request.

*Note: Spam referrals are in 'spam-referrals-blocker.js' file*
