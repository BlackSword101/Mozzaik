'use strict';

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View,Platform, Dimensions} from "react-native";
import Header from "../components/Header";
import colors from "../theme/colors";


export default class TermsAndConditionScreen extends Component {
    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Header canGoBack={true} onBackPress={()=> this.props.navigation.goBack()} navigation={this.props.navigation}/>
                <ScrollView
                    style={{padding: 15,  marginTop:(Platform.OS === 'ios' && Dimensions.get('window').height === 812) ? 20 : 0}}
                >
                    <Text style={[styles.text]}>
                        {'1. scope\n' +
                        '\n' +
                        'For all orders via our online store by consumers and businesses, the following terms and conditions apply. \n' +
                        '\n' +
                        'A consumer is any natural person who enters into a transaction for purposes which can be attributed primarily neither commercial nor independent professional activity. Entrepreneur is a natural or legal person or a legal partnership, in concluding a legal transaction in their commercial or independent professional activity. \n' +
                        '\n' +
                        'Compared to entrepreneurs, these terms also apply to future business relations, without us having to reiterate to them. Used by the trader conflicting or additional terms and conditions are hereby objected to their application; they are only part of the contract if we have expressly agreed.\n' +
                        '\n' +
                        '2. Contractor, Conclusion\n' +
                        '\n' +
                        'The purchase comes with Mozzaik GmbH.\n' +
                        '\n' +
                        'By setting the products in the online shop we submit a binding offer to conclude a contract on this article. You can insert our products initially suggested to the cart at any time to correct your input before submitting your binding order by using the space provided in the ordering process and explained proofing tools. The contract is concluded by accepting by clicking the order button the offer on the basket of goods. Immediately after sending the order you will receive once a confirmation e-mail.\n' +
                        '\n' +
                        '3. Contract language treaty text storage \n' +
                        'The for the formation of the contract languages ​​are German and English.\n' +
                        '\n' +
                        'We save the contract text and send you the order data and our conditions via e-mail. The contract document can be accessed in our customer login.\n' +
                        '\n' +
                        '4. delivery\n' +
                        '\n' +
                        'nor shipping costs are added plus to the specified product prices. For details on the amount of shipping, consult the offers.\n' +
                        '\n' +
                        'We only provide the transport route. Unfortunately, a self collection of the product is not possible.\n' +
                        '\n' +
                        '5. Payment\n' +
                        '\n' +
                        'In our shop are basically the following payment methods available:\n' +
                        '\n' +
                        'Credit card \n' +
                        'By submitting the order you provide us with the same credit card information. \n' +
                        'After your legitimacy as the rightful cardholder, we call immediately after ordering your credit card company to initiate the payment transaction. The payment transaction is automatically carried out by the credit card company and your card charged.\n' +
                        '\n' +
                        'PayPal  \n' +
                        'In the ordering process you will be redirected to the website of the online provider PayPal. In order to pay the invoice amount through PayPal, you must be registered there or to only register legitimize with your login and confirm the payment instruction to us. After delivery of the order in the shop, we call on PayPal to initiate the payment transaction.  \n' +
                        'The payment transaction is automatically performed by PayPal by sending the goods. You\'ll get more information during the ordering process.  \n' +
                        '\n' +
                        'Immediately \n' +
                        'After placing your order you will be redirected to the website of the online provider immediately GmbH. In order to pay the invoice amount on emergency, you must have an unlocked to participate in instant online banking account with PIN / TAN procedure, proof of their identity and confirm the payment instruction to us. You\'ll get more information during the ordering process. The payment transaction is immediately performed emergency and debits your account.\n' +
                        '\n' +
                        'bill You pay the invoice amount upon receipt of the goods and the invoice by bank transfer to our bank account. We reserve the right to offer purchase on account only after a successful credit check.'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'\n6. Reservation\n' +
                        '\n' +
                        'The goods remain our property until full payment. \n' +
                        'For entrepreneurs in addition: We shall retain title to the goods until full settlement of all claims from an ongoing business relationship. You may resell the reserved goods in the ordinary business operations; all arising from this resale requirements contact - regardless of a connection or mixing of the goods with a new article - in the amount of the invoice amount to us in advance, and we accept this assignment. They remain entitled to collect the receivables, we may also collect receivables but even as far as you do not meet your payment obligations.\n' +
                        '\n' +
                        '7. Transport damage\n' +
                        '\n' +
                        'For consumers:  \n' +
                        'If goods are delivered with obvious damages, please claim such error please immediately possible to the delivery and please take immediately contact us. The failure of a complaint or contact has for your legal rights and their enforcement, especially your warranty rights, no consequences. but they help us to make our own claims against the carrier or the transport insurance.\n' +
                        '\n' +
                        'Applies to entrepreneurs: \n' +
                        'The risk of accidental loss and accidental deterioration passes to you once we have the otherwise to execute the dispatch person or institution the matter to the forwarder, carrier or. Among merchants in § 377 HGB regulated examination and notification applies. Refrain from the provision prescribes a notification, the goods are considered approved unless it is a defect that was not detected in the study. This does not apply if we have fraudulently concealed a defect.\n' +
                        '\n' +
                        '8. Warranty and Guarantees\n' +
                        '\n' +
                        'It is the statutory warranty rights. For information on any applicable additional guarantees and the precise conditions each time product and special information pages in the online shop.\n' +
                        '\n' +
                        'Customer Service: You can contact our customer service for questions and complaints from Monday to Friday [8:00] to [18:00] on telephone number 023 368 191 857 or by e-mail at info@mozzaik.de "\n' +
                        '\n' +
                        '9. liability\n' +
                        '\n' +
                        'For claims due to damages caused by us, our legal representatives or agents, we always have unlimited liability\n' +
                        '\n' +
                        '* injury to life, limb or health,\n' +
                        '* in case of intentional or gross negligence of duty,\n' +
                        '* , If agreed with warranty promise, or\n' +
                        '* if the scope of the Product Liability Act is opened.\n\n' +
                        'For breach of contractual obligations, the fulfillment of which enables the proper execution of the contract and may rely on compliance of the parties, (cardinal obligations) through slight negligence by us, our legal representatives or agents, the liability to the amount of foreseeable at the time the contract was concluded limited damage typically be expected with its creation. Incidentally, claims for damages are excluded.\n' +
                        '\n' +
                        '10. Dispute Resolution \n\n' +
                        'The European Commission is providing a platform for online dispute resolution (OS) ready, which can be found here   https://ec.europa.eu/consumers/odr/ .  \n' +
                        'To participate in a dispute settlement procedure before a consumer arbitration board we are not required and not ready.\n' +
                        '\n' +
                        '11. Final Provisions \n\n' +
                        'Are you an entrepreneur, then German law applies excluding the UN sales law.\n' +
                        '\n' +
                        'Are you a merchant in terms of the Commercial Code, legal entity under public law or public special fund, the exclusive jurisdiction for any disputes arising from contractual relationships between us and you our place of business.'}
                    </Text>
                    <View style={{width: '100%', height: 30, backgroundColor: colors.white}}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    text: {
        color: colors.readText,
    }
});