'use client';

import {
  useForm as _useForm,
  UseFormProps as _UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export function useForm<Schema extends z.ZodTypeAny, Context = unknown>(
  props: Exclude<_UseFormProps<z.input<Schema>, Context>, 'resolver'> & {
    schema?: Schema;
  }
): UseFormReturn<z.input<Schema>, Context, z.infer<Schema>> {
  return _useForm<z.input<Schema>, Context, z.infer<Schema>>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: props.schema ? zodResolver(props.schema) : undefined,
    ...props,
  });
}
