import { Controller } from 'react-hook-form';
import { ControllerProps } from 'react-hook-form/dist/types/controller';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { styled } from '@mui/system';

const Phone = styled(PhoneInput)`
    .form-control {
        width: 100% !important;
        background: transparent !important;
    }
    .special-label {
        background: ${({ theme }) => theme.palette.background.paper} !important;
    }
`;

type TPhoneField<TFieldValues> = Omit<ControllerProps<TFieldValues>, 'render'> & PhoneInputProps;

export function PhoneField<TFieldValues>(props: TPhoneField<TFieldValues>) {
    const { control, name, rules, defaultValue, shouldUnregister, ...inputProps } = props;

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            shouldUnregister={shouldUnregister}
            render={({ field, fieldState: { error } }) => (
                <Phone
                    {...inputProps}
                    value={field.value as string}
                    onChange={field.onChange}
                    isValid={!error?.message}
                    defaultErrorMessage={error?.message}
                    preferredCountries={['ru', 'ua', 'by', 'kz']}
                    country={'ru'}
                    containerClass={'MuiFormControl-root'}
                    inputClass={'MuiInputBase-formControl'}
                />
            )}
        />
    );
}
