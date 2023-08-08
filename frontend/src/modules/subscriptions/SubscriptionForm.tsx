import { FormFieldLayout, FormLayout } from "@/components/forms";
import { defaultSubscriptionDetail, useSubscriptionForm } from "@/modules/subscriptions/hooks";
import { Button, Card, Typography } from "@material-tailwind/react";
import { FieldArray, Form } from "formik";

const SubscriptionForm = ({ id }: { id?: string }) => {
  const { initialValues, validationSchema, handleSubmit, loading, error } =
    useSubscriptionForm(id);

  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Card color="transparent" shadow={false} className="m-6">
        <Typography variant="h4" color="blue-gray">
          Subscription
        </Typography>
        <FormLayout
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values }: any) => (
            <Form className="mt-4 mb-2">
              <div className="mb-4 flex flex-col gap-6">
                <FormFieldLayout label="Name" name="name" />
                <FieldArray
                  name="subscriptionDetails"
                  render={({ insert, remove }) => {
                    const addSubscriptionDetail = (index: number) => {
                      insert(index + 1, defaultSubscriptionDetail);
                    };

                    const removeSubscriptionDetail = (index: number) => {
                      if (values.subscriptionDetails?.length > 1) remove(index);
                    };

                    return (
                      <div className="flex flex-col gap-6 overflow-y-auto max-h-[65vh] py-2">
                        {(
                          values.subscriptionDetails || [
                            defaultSubscriptionDetail,
                          ]
                        )?.map((subscriptionDetail: any, index: number) => (
                          <div className="flex gap-3" key={`detail-${index}`}>
                            <FormFieldLayout
                              label="Date"
                              type="date"
                              name={`subscriptionDetails.[${index}].date`}
                            />
                            <FormFieldLayout
                              type="time"
                              label="Start Time"
                              name={`subscriptionDetails.[${index}].startTime`}
                            />
                            <FormFieldLayout
                              type="time"
                              label="End Time"
                              name={`subscriptionDetails.[${index}].endTime`}
                            />
                            <div className="flex gap-3">
                              <Button
                                onClick={() => addSubscriptionDetail(index)}
                              >
                                Add
                              </Button>
                              <Button
                                onClick={() => removeSubscriptionDetail(index)}
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                />
              </div>
              <Button
                className="mt-6"
                fullWidth
                type="submit"
                disabled={loading}
              >
                {id ? "Update" : "Create"}
              </Button>
            </Form>
          )}
        </FormLayout>
      </Card>
    </div>
  );
};

export default SubscriptionForm;
