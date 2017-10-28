export default function reducer(
  state = Map(
    {}
  ),
  action
) {
  const { payload } = action;

  switch ( action.type ) {
    case 'TEST': {
      console.log( 'test', payload );
      return state;
    }
    // no default
  }

  return state;
}
