package types

func GenCoinInputList(name string, count int64) CoinInputList {
	return CoinInputList{
		CoinInput{
			Coin:  name,
			Count: count,
		},
	}
}

func GenCoinOutputList(name string, count int64) CoinOutputList {
	return CoinOutputList{
		CoinOutput{
			Coin:  name,
			Count: count,
		},
	}
}

func GenItemInputList(name string) ItemInputList {
	return ItemInputList{
		ItemInput{
			DoubleInputParamMap{"endurance": DoubleInputParam{"0.70", "1.0"}},
			LongInputParamMap{"HP": LongInputParam{100, 140}},
			StringInputParamMap{"Name": StringInputParam{name}},
		},
	}
}

func GenItemOutputList(name string) ItemOutputList {
	return ItemOutputList{
		ItemOutput{
			DoubleParamMap{"endurance": DoubleParam{"0.70", "1.0", "1.0"}},
			LongParamMap{"HP": LongParam{100, 140, "1.0"}},
			StringParamMap{"Name": StringParam{name, "1.0"}},
		},
	}
}
