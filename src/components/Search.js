import React, { Component } from 'react';
import { push } from 'gatsby'
import { Box, Keyboard, TextInput, AnnounceContext } from 'grommet';
import { Search } from 'grommet-icons';

const tagToPath = tag => `/tag/${tag}`;

export default class extends Component {
  state = { value: '', suggestions: this.props.suggestions };

  searchRef = React.createRef();

  componentDidMount() {
    this.setState({ refReady: true });
  }

  onChange = event => {
    const { target: { value } } = event;
    let suggestions;
    if (value) {
      const regexp = new RegExp(value, 'i');
      suggestions = this.props.suggestions.filter(c => regexp.test(c));
    } else {
      suggestions = this.props.suggestions;
    }
    // don't use newer value if nothing matches it
    if (suggestions.length > 0) {
      this.setState({ value, suggestions });
    }
  };

  onEnter = () => {
    const { value, suggestions } = this.state;
    if (value) {
      if (suggestions.length === 1) {
        push(tagToPath(suggestions[0]));
      } else {
        const matches = this.props.suggestions.filter(
          c => c.toLowerCase() === value.toLowerCase(),
        );
        if (matches.length === 1) {
          push(tagToPath(matches[0]));
        }
      }
    }
  };

  onSelect = event => {
    push(tagToPath(event.suggestion.toLowerCase()));
  };

  render() {
    const { focus, value, refReady, suggestions } = this.state;
    return (
      <AnnounceContext.Consumer>
      {announce => (
        <Keyboard onEnter={this.onEnter}>
          <Box
            ref={this.searchRef}
            direction="row"
            align="center"
            border={{ side: 'bottom', color: focus ? 'focus' : 'border' }}
          >
            <Search />
            <TextInput
              plain
              value={value}
              announce={announce}
              suggestions={suggestions}
              dropHeight="medium"
              dropTarget={refReady && this.searchRef.current}
              onChange={this.onChange}
              onSelect={this.onSelect}
              onFocus={() => this.setState({ focus: true })}
              onBlur={() => this.setState({ focus: false })}
            />
          </Box>
        </Keyboard>
      )}
      </AnnounceContext.Consumer>
    );
  }
}
