function isSpamReferral(){
  var spamReferrals = [
//$$REPLACE_ME$$
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
