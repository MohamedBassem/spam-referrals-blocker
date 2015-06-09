#Spam Referrals Blocker
Spam referrals is a tiny Js library that is developed to remove the hassle of updating your Google Analytics filters with urls spamming your referral results. It's extremely useful for websites that you don't have control on its web server, Github pages for instance.

### How to use it?
- Add `<script src="spam-referrals-blocker.js"></script>` to your footer before loading Google analytics' script.
- Wrap your Google analytics code with:
```js
  if( isSpamReferral() ){
    // Your google analytics code goes here.
  }
```

### How it works?
The idea simply is that this repo will be used to collect spam referrals and will usually update the included script. By having the script automatically included in your website you won't have to update the spam referral list in your google analytics, because the data won't be sent to GA in the first place.

### How to contribute?
This project is based heavily on contributions. Your contributions with urls, code or ideas are welcomed. Just fork the repo and create a pull request.
