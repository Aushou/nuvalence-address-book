# NuvalenceAddressBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Deployed URL

You can view this app at [https://nuvalence-address-book.vercel.app/contacts](https://nuvalence-address-book.vercel.app/contacts)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
## Summary
Implemented the required specs:  
* Display list of 10 randomly generated users
* Details page for any given contact
* Detail page contains first name, last name, phone number

Additional features:
* Used provided image urls (thumbnail for list, large for detail)
* Paginated list
* Material components for styling
* Deployed through Vercel

### Approach
I started targeting the minimum specifications with no styling. Since the spec stated the user base was primarily mobile, I mostly stayed in the Pixel 5 sized window in the debug tools to better focus on that UX. I decided to base the details page on a separate network call, with the logic being we could reduce the size of the list call by only specifying the limited attributes required (name, picture), and save calling for the extra detail only when the user wanted to see them specifically. This would later prove to be a mistake due how the RandomUser API works. The first obstacle was that there was no way to call a specific user again from the API (which, I guess, makes sense since it's random). However, this was easy enough to fake by making an unoptimal call for the entire Nuvalence list (entire being defined as 100 users generated in one go with that seed, an arbitrary cutoff), and filtering from there. This worked great, even if it kinda ruined my logic of minimizing network sizes, it felt closer to a realistic implementation from the component side. The true problems of this approach wouldn't materialize till later.  

After getting the barest bones version of the app working, I threw in some material components to get some very basic styling. It still looked weird, spacing and allignment in particular, especially when switching back to desktop sized window, but was good enough for now. I brought tests up to par so I could keep up with them better as I implemented more features. The first thing that was annoying me was a lack of back button to easily return to the list, so I added that, adding a toolbar to house it. I think I did pagination next, and some cleaning up of the theming from Material components. Finally, I focused on fixing the most egregious styling issues: the header title moving around depending on wheather or not the back button was there, spacing between the thumbnail image and the user's name, and limiting the maximum width depending on screen size. That went quicker than I'd feared, so I spent a little more time making it look a little nicer, with rounded image edges, centering, and making sure the list items were spaced appropriately. Finally, I threw it into Vercel to technically complete the cloud deployment bonus points. While I could set it up in an EC2 or something, I didn't want to spend the time finagling a cloud environment, server, and network settings when easier options existed. 

Once it was deployed, I gave it a quick spot check at the [new environment](https://nuvalence-address-book.vercel.app/contacts), where I finally noticed the issue that highlighted the previously mentioned mistake in single contact detail approach. Some users' detail page wouldn't load as I clicked around through pages. I investigated a user on the first page and realized that, rarely, some users wouldn't have a value for `id.value`, which I'd been using for the routes and filtering. Easy enough fix, I switched to `login.username`, which they all seemed to have, and had the benefit of being human readable in the url. Problem solved for that first user I tested with. However, other users still weren't loading. It turns out that pagination was the issue. I guess the API uses paramaters from the request as part of the seed or something like that. Requesting page 3 of users with the seed nuvalence does not return the same users that occupy the slots 21-30 in the response to a request for 100 users with the seed nuvalence. So, when I requested pages past page 1, the user name no longer lined up, and couldn't be found in the big list of "all" users.

## Next steps
I'd definitely like to fix the fetching single user issue. There's a couple ways to do it, and while I think my original decision to make separate calls for list and detail is the right choice in more real-world scenarios, at this point I'd have to make both the detail component and the service aware of pagination details in a really weird way to fix it, which seems like a mistake. I'd like to show more of the user details. It's so low effort that it didn't seem worth doing, even though to an imaginary user, they'd probably like that info, but as a tech demonstration, it's just adding pretty basic HTML so I never prioritized it. As a polish thing, I'd like to swap out the generic spinners for more specific skeleton loading components. Being able to search the list would probably be a nice feature for an imaginary user. I could definitely make the tests more thorough, despite the perfect coverage report, there's certainly testable cases that are missing.
