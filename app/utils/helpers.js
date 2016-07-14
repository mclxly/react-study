// -- Helpers ------------------------------------------------------ //
// This shouldComponentUpdate assumes that:
//   - a) only using props (not this.state and this.nextState)
//   - b) that all props are immutable
//
// In my case, and with using Redux, I found that I never had to worry
// about checking state. Adjust if you do use state
//
// Also note, cheating by using lodash - if you don't already use
// lodash sub it out for a smaller function
//

import _ from "lodash";

export function isDiff(nextProps) {
    return _.some(this.props, (p, key) => !p.equals(nextProps[key]));
};

// Find the pet records for a particular person
export function resolvePetsFor(allPets, person) {
  return allPets.filter(p => person.pets.includes(p.id));
}