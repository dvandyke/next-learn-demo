import Link from 'next/link'

export default function Header() {
  return (
    <header className="slds-global-header_container">
      <a
        href="javascript:void(0);"
        className="slds-assistive-text slds-assistive-text_focus"
      >
        Skip to Navigation
      </a>
      <a
        href="javascript:void(0);"
        className="slds-assistive-text slds-assistive-text_focus"
      >
        Skip to Main Content
      </a>
      <div className="slds-global-header slds-grid">
        <div className="slds-global-header__item">
          <div className="slds-global-header__logo sfdc_logo"></div>
        </div>
        <div className="slds-global-header__item slds-border_right">
          <button
            className="slds-button slds-icon-waffle_container"
            title="Description of the icon when needed"
          >
            <span className="slds-icon-waffle">
              <span className="slds-r1"></span>
              <span className="slds-r2"></span>
              <span className="slds-r3"></span>
              <span className="slds-r4"></span>
              <span className="slds-r5"></span>
              <span className="slds-r6"></span>
              <span className="slds-r7"></span>
              <span className="slds-r8"></span>
              <span className="slds-r9"></span>
            </span>
            <span className="slds-assistive-text">Open App Launcher</span>
          </button>
        </div>
        <div className="slds-global-header__item">
          <div className="page-symbol">
            <span
              className="slds-icon_container slds-icon-utility-trailhead"
              title="Description of icon when needed"
            >
              <svg
                className="slds-icon slds-icon slds-icon-text-default"
                aria-hidden="true"
              >
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#trailhead"></use>
              </svg>
              <span className="slds-assistive-text">
                Description of icon when needed
              </span>
            </span>
            <span>
              <b>Trailhead</b>
            </span>
          </div>
        </div>
        <div className="slds-global-header__item slds-global-header__item_search">
          <div className="slds-form-element">
            <label
              className="slds-form-element__label slds-assistive-text"
              for="combobox-id-2"
            >
              Search
            </label>
            <div className="slds-form-element__control">
              <div className="slds-combobox-group">
                <div className="slds-combobox_object-switcher slds-combobox-addon_start">
                  <div className="slds-form-element">
                    <label
                      className="slds-form-element__label slds-assistive-text"
                      for="objectswitcher-combobox-id-2"
                    >
                      Filter Search by:
                    </label>
                    <div className="slds-form-element__control">
                      <div className="slds-combobox_container">
                        <div
                          className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
                          aria-controls="primary-search-combobox-id-1"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                          role="combobox"
                        >
                          <div
                            id="objectswitcher-listbox-id-2"
                            className="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left"
                            role="listbox"
                          >
                            <ul
                              className="slds-listbox slds-listbox_vertical"
                              role="group"
                              aria-label="Suggested for you"
                            >
                              <li
                                role="presentation"
                                className="slds-listbox__item"
                              >
                                <div
                                  id="object0"
                                  className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                  role="presentation"
                                >
                                  <h3
                                    className="slds-listbox__option-header"
                                    role="presentation"
                                  >
                                    Suggested for you
                                  </h3>
                                </div>
                              </li>
                              <li
                                role="presentation"
                                className="slds-listbox__item"
                              >
                                <div
                                  id="object1"
                                  className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected"
                                  role="option"
                                >
                                  <span className="slds-media__figure slds-listbox__option-icon">
                                    <span className="slds-icon_container slds-icon-utility-check slds-current-color">
                                      <svg
                                        className="slds-icon slds-icon_x-small"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                      </svg>
                                    </span>
                                  </span>
                                  <span className="slds-media__body">
                                    <span
                                      className="slds-truncate"
                                      title="Accounts"
                                    >
                                      <span className="slds-assistive-text">
                                        Current Selection:
                                      </span>{' '}
                                      Accounts
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li
                                role="presentation"
                                className="slds-listbox__item"
                              >
                                <div
                                  id="object2"
                                  className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                  role="option"
                                >
                                  <span className="slds-media__figure slds-listbox__option-icon"></span>
                                  <span className="slds-media__body">
                                    <span
                                      className="slds-truncate"
                                      title="Reports"
                                    >
                                      {' '}
                                      Reports
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li
                                role="presentation"
                                className="slds-listbox__item"
                              >
                                <div
                                  id="object3"
                                  className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                  role="option"
                                >
                                  <span className="slds-media__figure slds-listbox__option-icon"></span>
                                  <span className="slds-media__body">
                                    <span
                                      className="slds-truncate"
                                      title="Contacts"
                                    >
                                      {' '}
                                      Contacts
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li
                                role="presentation"
                                className="slds-listbox__item"
                              >
                                <div
                                  id="object4"
                                  className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                  role="option"
                                >
                                  <span className="slds-media__figure slds-listbox__option-icon"></span>
                                  <span className="slds-media__body">
                                    <span
                                      className="slds-truncate"
                                      title="Files"
                                    >
                                      {' '}
                                      Files
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li
                                role="presentation"
                                className="slds-listbox__item"
                              >
                                <div
                                  id="object5"
                                  className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                  role="option"
                                >
                                  <span className="slds-media__figure slds-listbox__option-icon"></span>
                                  <span className="slds-media__body">
                                    <span
                                      className="slds-truncate"
                                      title="Groups"
                                    >
                                      {' '}
                                      Groups
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li
                                role="presentation"
                                className="slds-listbox__item"
                              >
                                <div
                                  id="object6"
                                  className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                  role="option"
                                >
                                  <span className="slds-media__figure slds-listbox__option-icon"></span>
                                  <span className="slds-media__body">
                                    <span
                                      className="slds-truncate"
                                      title="Leads"
                                    >
                                      {' '}
                                      Leads
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li
                                role="presentation"
                                className="slds-listbox__item"
                              >
                                <div
                                  id="object7"
                                  className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                  role="option"
                                >
                                  <span className="slds-media__figure slds-listbox__option-icon"></span>
                                  <span className="slds-media__body">
                                    <span
                                      className="slds-truncate"
                                      title="Notes"
                                    >
                                      {' '}
                                      Notes
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slds-combobox_container slds-combobox-addon_end">
                  <div
                    className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    id="primary-search-combobox-id-1"
                    role="combobox"
                  >
                    <div
                      className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element"
                      role="none"
                    >
                      <span className="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
                        <svg
                          className="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default"
                          aria-hidden="true"
                        >
                          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="slds-input slds-combobox__input"
                        id="combobox-id-2"
                        aria-autocomplete="list"
                        aria-controls="search-listbox-id-1"
                        autoComplete="off"
                        role="textbox"
                        placeholder="Search"
                      />
                    </div>
                    <div
                      id="search-listbox-id-1"
                      className="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid"
                      role="listbox"
                    >
                      <ul
                        className="slds-listbox slds-listbox_vertical"
                        role="group"
                        aria-label="Recent Items"
                      >
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="option0"
                            className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center"
                            role="presentation"
                          >
                            <h3
                              className="slds-listbox__option-header"
                              role="presentation"
                            >
                              Recent Items
                            </h3>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="option1"
                            className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon">
                              <span className="slds-icon_container slds-icon-standard-opportunity">
                                <svg
                                  className="slds-icon slds-icon_small"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
                                </svg>
                              </span>
                            </span>
                            <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">
                                Salesforce - 1,000 Licenses
                              </span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
                                Opportunity • Propecting
                              </span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="option2"
                            className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon">
                              <span className="slds-icon_container slds-icon-standard-contact">
                                <svg
                                  className="slds-icon slds-icon_small"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
                                </svg>
                              </span>
                            </span>
                            <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">
                                Art Vandelay
                              </span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
                                Contact • avandelay@vandelay.com
                              </span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="option3"
                            className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon">
                              <span className="slds-icon_container slds-icon-standard-account">
                                <svg
                                  className="slds-icon slds-icon_small"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                                </svg>
                              </span>
                            </span>
                            <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">
                                Vandelay Industries
                              </span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
                                Account • San Francisco
                              </span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="option4"
                            className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon">
                              <span className="slds-icon_container slds-icon-standard-event">
                                <svg
                                  className="slds-icon slds-icon_small"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
                                </svg>
                              </span>
                            </span>
                            <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">
                                Salesforce UK 2016 Events
                              </span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
                                Event • $20,000
                              </span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="option5"
                            className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon">
                              <span className="slds-icon_container slds-icon-standard-lead">
                                <svg
                                  className="slds-icon slds-icon_small"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#lead"></use>
                                </svg>
                              </span>
                            </span>
                            <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">
                                H.E. Pennypacker
                              </span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
                                Lead • Nursing
                              </span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slds-global-header__item slds-col_bump-left">
          <ul className="slds-global-actions">
            <li className="slds-global-actions__item">
              <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                <button
                  className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action"
                  title="no new notifications"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <svg
                    className="slds-button__icon slds-global-header__icon"
                    aria-hidden="true"
                  >
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
                  </svg>
                  <span className="slds-assistive-text">
                    no new notifications
                  </span>
                </button>
                <span aria-hidden="true" className="slds-notification-badge">
                  0
                </span>
              </div>
            </li>
            <li className="slds-global-actions__item">
              <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                <button
                  className="slds-button slds-global-actions__avatar slds-global-actions__item-action"
                  title="person name"
                  aria-haspopup="true"
                >
                  <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
                    <img
                      alt="Person name"
                      src="/assets/images/avatar2.jpg"
                      title="User avatar"
                    />
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        header {
          position: sticky;
        }
        .slds-global-header__item_search {
          flex: 0 1 15.5rem;
          min-width: 12.5rem;
        }
        .slds-global-header__logo {
          width: 3.5rem;
        }
        .page-symbol {
          margin: 0 20px;
          border-bottom: 4px solid rgb(21, 137, 238);
        }
      `}</style>
    </header>
  )
}
