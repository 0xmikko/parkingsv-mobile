/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import * as yup from 'yup';
import {
  FormikForm,
  FormikFormViewProps,
  LoadingView,
} from 'rn-mobile-components';
import {Profile} from '../../core/profile';

const formSchema = yup.object({
  name: yup.string().required().min(5),
  plate: yup.string().required().min(5),
});

interface FormViewProfileProps extends FormikFormViewProps<Profile> {}

export const NameAndPlateFormView: React.FC<FormViewProfileProps> = ({
  data,
  onSubmit,
  isSubmitted,
}) => {
  const fields = {
    name: {label: 'Name'},
    plate: {label: 'Plate'},
  };

  if (!data) return <LoadingView />;

  return (
    <FormikForm
      formSchema={formSchema}
      fields={fields}
      initialValues={(data as unknown) as Record<string, unknown>}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};
