# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](images/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- I started with a desktop version first. I decided to use Flexbox for a responsive layout, but I figured the two columns (the one with the text and another one containing the image)
didn't take up the same amount of space. Therefore, setting the property flex:1 for both columns didn't make much sense because they weren't equal according to a design sketch.
So I decided to play with the flex-basis instead. Flex-basis is the initial width of an element, before the flexbox properties are applied. So if the whole screen is 100% width,
and if the first column takes up more space than the image column, I figured its flex-basis should be more than 50%. That's how I split the screen (58% + 42%).

Adapting the layout for a mobile version took me a moment or two to figure out how to change the order of the elements on the page. However, by using the .hidden class to hide elements I didn't need, 
I was able to achieve the desired result.

When I covered the 1440px and 375px screen widths, I tried to cover all the screen widths inbetween to make the page completely responsive. I needed several breakpoints for that but they
needed just minor adjustments.
To limit the whole page width, I set the main section to max-width: 1920px so it doesn't grow larger than that, even on 4K screens.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript (vanilla)

### What I learned

Adapting a different layout for a mobile version required a little bit of creative thinking for me. I was looking for the most elegant solution and eventually 
came up with the idea of playing with hidden classes, adding them and removing for certain parts of the website, depending on a screen version.

Absolute positioning on a submit button gave me a bit of a hard time but I managed to position it correctly in the end. 

### Continued development

I would definitely like to keep working on DOM manipulation in Javascript. 
Also adjusting and changing the layout, whether it's a mobile or desktop version is something I would like to spend more time on.

### Useful resources

- (https://www.w3resource.com/javascript/form/email-validation.php) - This helped me to get the idea of email validation in JS. It contains a regular expression to perfom the validation.

## Author

-- Frontend Mentor - [@d8701a](https://www.frontendmentor.io/profile/d8701a)


