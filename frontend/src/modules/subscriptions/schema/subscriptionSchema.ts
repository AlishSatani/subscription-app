import moment from "moment";
import { array, object, string } from "yup";

const subscriptionDetailFields = {
  id: string().trim(),
  date: string().required(),
  startTime: string().required(),
  endTime: string().required().test((endTime, context) => {
    if (moment(endTime, 'HH:mm').isAfter(moment(context.parent.startTime, 'HH:mm'))) return true;

    return context.createError({
      path: context.path,
      message: "End time must be after start time."
    });
  }),
}

const subscriptionFields = {
  id: string().trim(),
  name: string().trim().ensure().required(),
  subscriptionDetails: array().of(object().shape(subscriptionDetailFields)).required(),
};

export const SubscriptionSchema = object().shape(subscriptionFields).required();
