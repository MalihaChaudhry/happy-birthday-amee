import Reactotron from 'reactotron-react-js';
import reactotronZustand from 'reactotron-plugin-zustand';
import useAmeeStore from './src/stores/useAmeeStore';

Reactotron.configure({})
  .use(
    reactotronZustand({
      stores: [{ name: 'amee', zustand: useAmeeStore }],
    })
  ) // plus some custom made plugin.
  .connect(); // let's connect!
