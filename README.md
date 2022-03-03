# Angular Components Example 1

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-bdsyjw)

## Tasks

1. The header "Hello Angular 13!" is duplicated. Makes sure it is shown only once: remove the 1st one. Also, find and remove the `(Message placeholder)` text.

2. Complete the implementation: so that SenderComponent may send strings to the ReceiverComponent. From the UI point of view: the (filled) value in the text input box should be displayed under the "Receiver", when the user clicks on the "send" button. Simply add each new string as `<li>` element.

3. Based on #2:

   - Make sure that if the input box is empty, the sent string value will be this literal: `(empty)`
   - Add a "Delete All" button to Receiver which will delete all messages from the component/screen.

4. Styling task: The Sender and the Receiver components should be placed next to each other (unlike now.) We would prefer Bootstrap, but you may use other tools as well.
