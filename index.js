'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Linguistic Facts';

/**
 * Array containing linguistic facts.
 */
var FACTS = [
    "The most common basic sentence order among the world's languages is S.O.V. which stands for Subject Object Verb.",
    "Languages evolve over time and Linguists can trace this evolution using linguistic evolutionary trees.",
    "Proto-IndoEuropean is the ancestor language of most modern languages found in Europe and India.",
    "Semantic satiation is when a word is said so many times in a row that it temporarily stops having meaning.",
    "Infixation is a type of morphology similar to prefixation and suffixation. Prefixes are attached to the beginning of a word. Suffixes are attached to the end of a word. And infixes are inserted into the middle of a word.",
    "Reduplication is a type of morphology where an entire word, or a piece of a word, is repeated to convey specific syntactic or semantic information.",
    "Semantic drift is a phenomenon where the meaning of a word slowly changes over time. For instance, the English word 'nice' once meant 'stupid' or 'dull'.",
    "A Spoonerism is a speech error where a person swaps the initial sounds of two words. For instance, saying 'Let me sew you to your sheets' instead of 'Let me show you to your seats.' This phenomenon is named after Reverend William Archibald Spooner who was famous for often making this kind of error.",
    "Universal Grammar is a theory by Professor Noam Chomsky which postulates that children are born with an innate template for language learning. This template is thought to dictate the basic properties of human language shared by all languages around the world. Children then develop more specific rules depending on what languages they are exposed to.",
    "Most languages evolve naturally over time. Sometimes humans will invent a language, known as a constructed language. Esperanto is an example of a constructed language. It was invented to be a universal language that is easy to learn and speak. Elvish and Klingon are examples of languages constructed for fantasy and science fiction.",
    "Nicaraguan Sign Language is an example of a currently emerging language. The language is less than 50 years old. It was invented by Nicaraguan students at a school for deaf children in Nicaragua in the 1970s and 1980s. It is one of the best examples of language evolution in action.",
    "Tone and pitch are used in all languages. Some languages have pitch contours for entire sentences, such as English where a question has a rising pitch at the end. Other languages have tone contours on individual words, such as Mandarin, which has four tones that can be applied to words, with each tone giving the word a unique meaning.",
    "The wug test is a famous language acquisition experiment by Professor Jean Berko Gleason. It proved children are able to generalize about language patterns they're exposed to. Specifically, children were able to correctly determine the plural form of the novel word 'wug'. This is a 'wug'. Now there are two of them. There are two 'wugs'."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random linguistic fact from the linguistic facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a linguistic fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
