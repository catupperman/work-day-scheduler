# work-day-scheduler
## **The Project Itself**
To create a dynamic daily planner that allows the user to enter information into each time slot.  A running date and time clock, consistantly refreshing with the latest date and time.  The schedule will change colors depending on the time of day, Green for Future, Red for Present, Gray for Past. Information entered by the user will be stored within local storage.

## **The Process**
After writing Pseudo Code to hash out my ideas, of how I would like the page to work, 
the first object tackled was the running date and time using moment.  This was at the top of the page, and made the most sense to start with to have comparable time to the slots themselves. Now that I had a text box, finding a way to save that information to local storage was next.  After that was figuring out what the best method would be to tackle the time slots, eventually using the pre-existing code within the CSS was the best option, and the most asthetically pleasing.  After that it was creating the function to loop through each time slot and compare with the current hour.  This felt tricky, but ended up being rather simple. Then color manipulation for the past, present,and future option. This took longer than I'd like to admit, writing over 80 different variations of functions. .addClass ended up being the ticket. 
All in all, this was quite a learning experience.  As always I wish I had just a bit more time to noodle around and maybe play with more of the functionality. 

* Link to Site https://catupperman.github.io/work-day-scheduler/

* Tech Used: HTML, CSS, JavaScript, Bootstrap, and Screencastify

* Licence: MIT

* Contact: catupperman@gmail.com

![Work-Day-Scheduler](assets/work-day-scheduler.gif)


