import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  ButtonSpinner,
  ButtonText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import { ErrorMessage } from '@/components';
import { useAppDispatch } from '@/store';
import { addNewAid } from '@/store/slices/aids/operations';
import { AddAidInput } from '@/types';
import { useSelector } from 'react-redux';
import { selectAids } from '@/store/slices/aids/selectors';
import { useRouter } from 'expo-router';

const Create = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<AddAidInput>({
    defaultValues: {
      title: '',
      description: '',
      link: '',
    },
  });

  const dispatch = useAppDispatch();

  const { isAidAdding } = useSelector(selectAids);

  const onSubmit: SubmitHandler<AddAidInput> = async (data) => {
    await dispatch(addNewAid(data)).unwrap();
    reset();
    router.push('/home');
  };
  return (
    <SafeAreaView>
      <View
        style={{ gap: 32 }}
        className="flex flex-col items-center justify-start p-3 h-screen">
        <View className="relative">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input width="$80">
                <InputField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Назва"
                />
              </Input>
            )}
            name="title"
          />
          {errors.title && <ErrorMessage />}
        </View>
        <View className="relative">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input width="$80">
                <InputField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Опис"
                />
              </Input>
            )}
            name="description"
          />
          {errors.description && <ErrorMessage />}
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input width="$80">
                <InputField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Посилання на банку"
                />
              </Input>
            )}
            name="link"
          />
          {errors.link && <ErrorMessage />}
        </View>
        <Button
          position="absolute"
          bottom="$48"
          isDisabled={isAidAdding}
          onPress={handleSubmit(onSubmit)}>
          {isAidAdding && (
            <>
              <ButtonSpinner />
            </>
          )}
          <ButtonText>Додати</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Create;
