/* eslint-disable react/require-default-props */
import React, { useImperativeHandle, useState } from "react";
import countries from "../../util/countries";

export type CountryRef = {
  getCountry: () => string;
};

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
};

const CountryAutocomplete = React.forwardRef<CountryRef, Props>(
  ({ value, onChange, onBlur }, ref) => {
    const [country, setCountry] = useState(value || "");
    const [filteredCountries, setFilteredCountries] = useState([""]);

    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line prefer-destructuring, @typescript-eslint/no-shadow
      const value = e.target.value;
      setCountry(value);

      // eslint-disable-next-line @typescript-eslint/no-shadow
      const filtered = countries.filter((country) =>
        country.toLowerCase().startsWith(value.toLowerCase()),
      );

      setFilteredCountries(filtered);

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onChange && onChange(value);
    };

    useImperativeHandle(ref, () => ({
      getCountry: () => country,
    }));
    return (
      <div>
        <label htmlFor="country">
          Country
          <input
            id="country"
            type="text"
            value={country}
            onChange={handleCountryChange}
            onBlur={onBlur}
            list="countries"
          />
          <datalist id="countries">
            {filteredCountries.map((countryItem) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <option key={countryItem} value={countryItem} />
            ))}
          </datalist>
        </label>
      </div>
    );
  },
);

export default CountryAutocomplete;
