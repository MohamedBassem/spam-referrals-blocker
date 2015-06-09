function isSpamReferral(){
  var spamReferrals = [
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
