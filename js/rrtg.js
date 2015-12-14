$(document).ready(function(){
  function generator(){
    // First we need a variable with all of our terms. Be careful not to mess up the syntax- enclose each term in quotes and separate each with a comma!
    var terms = ["clinical psychology", "mood disorders", "eating disorders", "cognitive behavioral therapy", "aging", "substance abuse", "memory loss", "schizophrenia", "hypnosis", "emotional health", "personality", "sexual orientation", "discrimination", "diversity", "socioeconomic status", "motivation", "children", "youth", "violence", "access to resources", "rehabilitation", "recovery", "positive psychology", "exposure to violence", "post-traumatic stress disorder", "veterans", "anxiety", "intrusive memories", "social anxiety", "psychosomatic", "acute stress", "attribution theory", "aversion therapy", "anxiety disorders", "behavior modification", "behaviorism", "biomedical therapies", "body image", "bulimia nervosa", "case study", "chronic stress", "circadian rhythm", "comorbidity", "cultural perspective", "dream analysis", "dichotic listening", "electroencephalogram", "etiology", "fight-or-flight response", "frustration-aggression hypothesis", "gender roles", "gender identity", "Gestalt therapy", "heredity", "job burnout", "limbic system", "intellectual disability", "morality", "normative influence", "negative reinforcement", "observer bias", "phobia", "placebo effect", "repression", "schemas", "self-esteem", "self-awareness", "transference", "unconscious inference", "normative social influence", "social cognitioin", "personality traits", "confirmation bias"];
    //This code draws the random numbers based on the number of terms in the variable above (terms.length)
    var randomNumber1 = parseInt(Math.random() * terms.length);
    var randomNumber2 = parseInt(Math.random() * terms.length);
    while (randomNumber1 === randomNumber2) { //the two numbers are the same
      randomNumber2 = parseInt(Math.random() * terms.length); //draw a new number
    }
    var firstTerm = terms[randomNumber1]; //first term at the random position
    var lastTerm = terms[randomNumber2];  //second term at the random position
    
  //create the text that displays on the screen  
    var name = firstTerm + "<br>AND<br>" + lastTerm; //Add the word "AND" 
    $('#screen').html(name); //enter the text into the 'screen'
    
  //time to create the query string and URL for navigating to a search page
    var nameURL = name.trim(); //get rid of excess whitespace in 'name'
    nameURL = nameURL.replace(/<br>/g,' '); //get rid of line breaks 
    nameURL = encodeURI(nameURL); //encode the string for a URL
  //now paste in the search URL (from the HSU Library) and sandwich in your nameURL variable  
    var searchURL = 'http://library.calstate.edu/humboldt/articles/results?query='+nameURL+'&facet.ContentType=Journal+Article'; //add the rest of the URL
    $('#searchTopic').attr('href',searchURL); //replace the link href
  }       
  $('#rtg').click(function(){
    generator(); //when the retry button is clicked, run the script
  }); 
  generator(); //run the script when page loads    
});
