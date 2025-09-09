import { useState } from 'react';

interface ValidationRules {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
  match?: string;
  custom?: (value: string) => string | null;
}

interface FormField {
  value: string;
  error: string;
  rules?: ValidationRules;
}

interface FormFields {
  [key: string]: FormField;
}

export const useFormValidation = () => {
  const validateEmail = (email: string): string | null => {
    if (!email.trim()) {
      return 'El email es requerido';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Ingresa un email válido';
    }
    return null;
  };

  const validatePhone = (phone: string): string | null => {
    if (!phone.trim()) {
      return 'El teléfono es requerido';
    }
    const cleanPhone = phone.replace(/\s/g, '');
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return 'Ingresa un teléfono válido (10 dígitos)';
    }
    return null;
  };

  const validatePassword = (password: string, minLength: number = 6): string | null => {
    if (!password.trim()) {
      return 'La contraseña es requerida';
    }
    if (password.length < minLength) {
      return `La contraseña debe tener al menos ${minLength} caracteres`;
    }
    return null;
  };

  const validateRequired = (value: string, fieldName: string): string | null => {
    if (!value.trim()) {
      return `${fieldName} es requerido`;
    }
    return null;
  };

  const validateMatch = (value: string, matchValue: string, fieldName: string): string | null => {
    if (value !== matchValue) {
      return `${fieldName} no coinciden`;
    }
    return null;
  };

  const validateField = (value: string, rules?: ValidationRules): string | null => {
    if (!rules) return null;

    if (rules.required && !value.trim()) {
      return 'Este campo es requerido';
    }

    if (rules.email && value.trim()) {
      return validateEmail(value);
    }

    if (rules.phone && value.trim()) {
      return validatePhone(value);
    }

    if (rules.minLength && value.trim() && value.length < rules.minLength) {
      return `Debe tener al menos ${rules.minLength} caracteres`;
    }

    if (rules.match && value !== rules.match) {
      return 'Los valores no coinciden';
    }

    if (rules.custom && value.trim()) {
      return rules.custom(value);
    }

    return null;
  };

  const validateForm = (fields: FormFields): { isValid: boolean; errors: Record<string, string> } => {
    const errors: Record<string, string> = {};
    let isValid = true;

    Object.entries(fields).forEach(([fieldName, field]) => {
      const error = validateField(field.value, field.rules);
      if (error) {
        errors[fieldName] = error;
        isValid = false;
      }
    });

    return { isValid, errors };
  };

  return {
    validateEmail,
    validatePhone,
    validatePassword,
    validateRequired,
    validateMatch,
    validateField,
    validateForm,
  };
};

// Hook para manejo de estado de formularios
export const useFormState = <T extends Record<string, any>>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const setValue = (field: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const setError = (field: keyof T, error: string) => {
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const clearError = (field: keyof T) => {
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  const setFieldTouched = (field: keyof T) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    setValue,
    setError,
    clearError,
    clearAllErrors,
    setTouched: setFieldTouched,
    reset,
  };
};