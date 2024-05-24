import { eventBus } from "../global";


eventBus.subscribe('trackClicked', (data) => {
    this.render(data);
});