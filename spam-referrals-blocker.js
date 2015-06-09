function isSpamReferral(){
  var spamReferrals = [
    /buttons-for-website\.com/,
    /social-buttons\.com/,
    /4webmasters\.org/,
    /semalt\.com/,
    /free-share-buttons\.com/,
    /best-seo-offer\.com/,
    /trafficmonetize\.org/,
    /100dollars-seo\.com/,
    /event-tracking\.com/,
  ];
  var currentReferral = document.referrer;
  if(currentReferral){
    for(var i=0; i< spamReferrals.length;i++){
      if( currentReferral.match(spamReferrals[i]) )
        return true;
    }
  }
  return false;
}
