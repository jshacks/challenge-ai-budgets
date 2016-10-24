# Goal

1. Create a simple public budget simulator that educates and engages citizens in the budget process

2. Integrate it with banipublici.ro - deadline:asap


## Pages
1. Welcome
2. Budget Simulator
3. View result and share to facebook

## User usage steps
1. User accesses citizenbudgetsim.domain
  * eye candy page is displayed with 2 controls: 'choose county':(select) and 'go to next step':(button)

2. On 'go to next step' button click
  * verify county to be selected, display alert if not
  * request budget data from BE using the selected county
  * redirect to page2:Budget Simulator
  * display simulator widget and a 'send my budget simulation to the prime minister':(button)
  * user uses the slider widget to plan the budget, he is now the budget planner, btw, who plans the public budgets in Romania?
  * the prime minister is one click away
3. on 'send my budget simulation to the prime minister' button click
  * redirect to page3:View result and share to facebook
  * display simulation result, same as page2, but with no edit control or sliders, and 'post simulation to the prime minister's facebook wall':(button)
  * use facebook's [share dialog] to post on prime minister's wall
  * display thank you message

[share dialog]: https://developers.facebook.com/docs/sharing/reference/share-dialog

