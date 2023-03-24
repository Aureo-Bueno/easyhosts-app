import { Text, View } from "react-native";
import { useQuery } from "react-query";
import { fetchBedrooms } from "../../services/intex";
import { IBedroom } from "../../services/types";

export default function Bedroom() {
    const {isLoading, data} = useQuery('/api/easyhosts/Bedroom/getBedrooms/', fetchBedrooms)

    return(
        <View>
            {isLoading && 
                <Text>Carregando.</Text>
            }
            {data?.map((bedroomList: IBedroom) => (
                <Text>{bedroomList.name}</Text>
            ))}
        </View>
    );
}
