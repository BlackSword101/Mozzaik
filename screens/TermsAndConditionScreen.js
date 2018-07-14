'use strict';

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
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
                <ScrollView style={{padding: 15}}>
                    <Text style={[styles.text]}>
                        {'GENERAL TERMS AND CONDITIONS FOR SHOPPING IN ONLINESHOP MOZZAIK.DE\n' +
                        '\n' +
                        'General Terms and Conditions (GTC) for the sale of all goods\n' +
                        '\n' +
                        '§ 1 CONTRACTUAL PARTNER\n' +
                        '\n' +
                        'Contractual partners for the sale of goods are Mozzaik GmbH, Else-Lasker-Schüler-Str. 69 Wuppertal - 42107, Phone: +491 202 283 233 33, E-Mail: info@mozzaik.de.\n' +
                        '\n' +
                        '§ 2 SCOPE\n' +
                        'For the sale of goods by Mozzaik GmbH, the following General Terms and Conditions (GTC) apply exclusively under I. in the version valid at the time of the order. Terms and conditions may be stored and / or printed for the purpose of the order.\n' +
                        '\n' +
                        '§ 3 CONCLUSION OF CONTRACT\n' +
                        'a) General:\n' +
                        '\n' +
                        '1. The purchaser can order the goods offered on the website of Mozzaik GmbH by online shopping on the Internet using the online order form on the basis of these general terms and conditions in household quantities at the Mozzaik GmbH. The order of quantities larger than usual households requires the explicit consent of Mozzaik GmbH and is subject to the condition of sufficient stocking.\n' +
                        '\n' +
                        '2. The presentation of products in the online shop is not a legally binding offer, but a non-binding online catalog. By clicking the button "Buy" / "order to pay" the buyer gives a binding offer to conclude a purchase agreement on the in the shopping cart The contract between the customer and the Mozzaik GmbH comes with acceptance by the Mozzaik GmbH by sending of the dispatch confirmation or also by the dispatch of the commodity.A claim on a contract conclusion does not exist.The confirmation of the receipt of the order immediately after Subsequent to the submission of the order, does not represent a contract acceptance.\n' +
                        '\n' +
                        '3. The best before date depends on the date of the order by the customer. If there are delivery delays, the best before date stated in the item description may differ.\n' +
                        '\n' +
                        '4. By placing the order, the purchaser agrees that Mozzaik GmbH passes on his e-mail address to DHL Paket GmbH, so that he can be informed about the expected delivery window of his shipment. The purchaser may at any time object to the forwarding of his e-mail address to Mozzaik GmbH. A notification is then no longer possible. The objection must be sent to info@mozzaik.de.\n' +
                        '\n' +
                        'b) Special features for the protection of minors\n' +
                        'Prerequisite for the conclusion of the contract is that the purchaser is of age.\n' +
                        '\n' +
                        'To order and buy alcohol online, the customer must be at least 18 years old. With his order, the customer agrees to the terms and conditions of Mozzaik GmbH and confirms that he has reached the age of 18 years.\n' +
                        '\n' +
                        '§ 4 PAYMENT TERMS\n' +
                        '1. The purchase price plus the packaging and shipping costs according to § 8 with receipt of the invoice is due. The prices are valid at the time of the order. All prices include VAT (7% or 19%). The current packaging and shipping costs are displayed to the customer during the order continuously in the shopping cart drop-down menu.\n' +
                        '\n' +
                        'The purchase contract is concluded with Mozzaik GmbH.\n' +
                        '\n' +
                        '\n' +
                        'The presentation of the products in the online shop is not a legally binding offer, but a non-binding online catalog. You can put our products initially without obligation in the cart and correct your input before submitting your binding order at any time, by providing this in the order process and use explained proofing tools. By clicking on the order button you place a binding order of the goods contained in the shopping cart. Confirmation of receipt of your order will be made by e-mail immediately after sending the order.\n' +
                        '\n' +
                        'When the contract is concluded with us, depends on the payment method you have chosen:\n' +
                        '\n' +
                        '\n' +
                        'Credit card via Paypal Plus\n' +
                        'By submitting the order, you also transmit your credit card data to us at the same time. Once you have become a legitimate cardholder, we will ask your credit card company to initiate the payment transaction and accept your offer.\n' +
                        '\n' +
                        '\n' +
                        'PayPal\n' +
                        'In the order process you will be redirected to the website of the online provider PayPal. There you can enter your payment details and confirm the payment order to PayPal. After placing the order in the shop, we request PayPal to initiate the payment transaction and thereby accept your offer.\n' +
                        '\n' +
                        'PayPal Plus\n' +
                        'As part of the payment service PayPal Plus we offer various payment methods as PayPal services. After placing the order you will be redirected to the website of the online provider PayPal. There you can enter your payment details and confirm the payment order to PayPal. This is the contract with us.\n' +
                        '\n' +
                        '\n' +
                        'IMMEDIATELY transfer\n' +
                        'After placing the order you will be redirected to the website of the online provider SOFORT Überweisung, where you confirm the payment order to SOFORT Überweisung. This is the contract with us.\n' +
                        '\n' +
                        '\n' +
                        'Amazon Pay\n' +
                        'In the ordering process you will be redirected to the website of the online provider Amazon before the end of the order process in our online shop. There you can choose the delivery address and payment method stored on Amazon and confirm the payment order to Amazon. Afterwards you will be redirected to our online shop, where you can complete the order process. After submitting the order, we will ask Amazon to initiate the payment transaction and thereby accept your offer.\n' +
                        '\n' +
                        '\n' +
                        '3. Contract language, contract text storage\n' +
                        'The languages ​​available for the contract are German and English.\n' +
                        '\n' +
                        'We save the contract text and send you the order data and our terms and conditions by e-mail. You can also view and download the terms and conditions here on this page. Your past orders can be viewed in our customer login.\n' +
                        '\n' +
                        '\n' +
                        '4. Terms of delivery\n' +
                        '\n' +
                        'In addition to the stated product prices shipping costs are added. You can find out more about the amount of shipping costs in the offers.\n' +
                        'We only deliver in transit. Unfortunately, a self collection of the product is not possible.\n' +
                        '\n' +
                        '\n' +
                        '5. Payment\n' +
                        'In our shop you can always use the following payment methods:\n' +
                        '\n' +
                        '\n' +
                        'Credit card over stripe\n' +
                        'By submitting the order, you also transmit your credit card data to us at the same time.\n' +
                        'After your legitimacy as a legitimate cardholder, we request your credit card issuer immediately after the order to initiate the payment transaction. The payment transaction is automatically performed by the credit card company and charged to your card.\n' +
                        '\n' +
                        'PayPal\n' +
                        'In the order process you will be redirected to the website of the online provider PayPal. In order to pay the invoice amount via PayPal, you must be registered there or first register, legitimize with your access data and confirm the payment order to us. After placing the order in the shop, we request PayPal to initiate the payment transaction.\n' +
                        'The payment transaction will be carried out automatically by PayPal immediately thereafter. You\'ll get more information during the ordering process.\n' +
                        '\n' +
                        '\n' +
                        'PayPal Plus\n' +
                        'As part of the payment service PayPal Plus, we offer you various payment methods as PayPal services. You will be redirected to the website of the online provider PayPal. There you can enter your payment details, confirm the use of your data by PayPal and the payment instructions to PayPal.\n' +
                        '\n' +
                        'If you have selected the payment method Invoice, you do not have to be registered with PayPal in order to pay the invoice amount. After successful address and credit check and delivery of the order, we withdraw our claim to PayPal. In this case you can only pay to PayPal with debt-discharging effect. For the payment via PayPal apply - in addition to our terms and conditions - the terms and conditions and privacy policy of PayPal. For more information and the complete terms and conditions of PayPal to purchase the invoice can be found here: https://www.paypal.com/de/webapps/mpp/ua/pui-terms?locale.x=de_DE.\n' +
                        '\n' +
                        'IMMEDIATELY transfer\n' +
                        'After placing the order you will be redirected to the website of the online provider SOFORT Überweisung. In order to be able to pay the invoice amount via SOFORT Überweisung, you must have an online banking account with PIN / TAN procedure activated for participation in SOFORT Überweisung, have your authorization and confirm the payment order to us. You\'ll get more information during the ordering process. The payment transaction will be carried out immediately after that by SOFORT Überweisung and your account will be debited.\n' +
                        '\n'
                        }
                    </Text>
                    <Text style={[styles.text]}>
                        {'Amazon Pay\n' +
                        'In the ordering process you will be redirected to the website of the online provider Amazon before the end of the order process in our online shop. To be able to process the order process via Amazon and pay the invoice amount, you must be registered there or first register and legitimize with your access data. There you can choose the delivery address and payment method stored on Amazon, confirm the use of your data by Amazon and the payment order to us. Afterwards you will be redirected to our online shop, where you can complete the order process.\n' +
                        '\n' +
                        '\n' +
                        'Immediately after the order, we request Amazon to initiate the payment transaction. The payment transaction will be performed automatically by Amazon. You\'ll get more information during the ordering process.\n' +
                        '\n' +
                        '\n' +
                        '2. Payment by invoice\n' +
                        '\n' +
                        'In cooperation with Paypal Plus, Mozzaik GmbH offers the purchaser the purchase of the invoice as payment options. When paying with Paypal Plus, the customer must never give his account details, and he pays only when he has received the goods.\n' +
                        '\n' +
                        'With the payment method Paypal Plus Invoice a delivery to a delivery address deviating from the billing address is not possible. When buying on account with Klarna, the customer always gets the goods first and he always has a payment period of 14 days.\n' +
                        '\n' +
                        '§ 5 PACKAGING AND SHIPPING COSTS\n' +
                        'About the shipping costs of the order, the customer is informed in the shopping cart drop-down menu continuously.\n' +
                        '\n' +
                        'The following packing and shipping costs are calculated per order:\n' +
                        '• For orders up to 20, - € the shipping costs are 4.90 €\n' +
                        '• From an order value of 20, - € the delivery is free of charge.\n' +
                        '\n' +
                        '§ 6 DELIVERY AND DELIVERY TIMES\n' +
                        '1. Deliveries are only possible in Germany.\n' +
                        '\n' +
                        '2. The order is shipped via DHL, DPD. Mozzaik GmbH assumes no liability for compliance with a delivery time stipulated by the orderer. We will inform you immediately about the occurrence of delays in delivery.\n' +
                        '\n' +
                        '3. If the orderer (or a neighbor) does not meet at the delivery address, the parcel will be sent to the nearest DHL DPD parcel station / branch. The maximum storage time in the DHL-DPD parcel station is 7 days. It is the responsibility of the purchaser to pick up the goods there within the storage period. If the maximum retention period has expired, the package is sent back to the central warehouse. A refund of the purchase price is not possible in this case.\n' +
                        '\n' +
                        '\n' +
                        '§ 7 RIGHTS OF THE ORDER AGAINST DEFECTS\n' +
                        '1. If the delivered goods do not have the agreed quality or are not suitable for the use assumed by the contract or the generally customary use, or does it not have the characteristics that the customer can expect after the statements of Mozzaik GmbH in this online shop , Mozzaik GmbH provides supplementary performance at the discretion of the purchaser by rectifying the defect or delivering a faultless product. Mozzaik GmbH can refuse the type of supplementary performance chosen by the customer if it is only possible with disproportionate costs. Multiple supplementary performance is permissible. If the supplementary performance fails, the purchaser can, at his option, reduce the purchase price appropriately, or withdraw from the contract, or demand compensation for damages or reimbursement of wasted expenditure under the statutory conditions.\n' +
                        '\n' +
                        '2. If Mozzaik GmbH provides the purchaser with faultless goods for the purpose of subsequent performance, the purchaser is obliged to return the defective goods to Mozzaik GmbH within 30 days at the expense of Mozzaik GmbH. The return of the defective goods must be made in accordance with the statutory provisions of §§ 439 para. 4, 346-348 BGB.\n' +
                        '\n' +
                        '3. The limitation period for the preceding claims is 2 years from the delivery of the goods.\n' +
                        '\n' +
                        '4. The above rights of the purchaser may deviate from existing guarantees granted by the manufacturer. The special warranty conditions can be found in the item description. Irrespective of any additional guarantees for individual articles, the statutory warranty claims of the purchaser are unrestricted.\n' +
                        '\n' +
                        '\n' +
                        '§ 8 LIMITATION OF LIABILITY\n' +
                        '1. Mozzaik GmbH If the delivered goods do not have the agreed quality or are they not suitable for the use assumed by the contract or the generally customary use, or does it not have the characteristics that the customer, following the statements of Mozzaik GmbH in this online Shop can expect, the Mozzaik GmbH makes at the option of the purchaser supplementary performance by elimination of the defect or delivery of a faultless goods. Mozzaik GmbH can refuse the type of supplementary performance chosen by the customer if it is only possible with disproportionate costs. Multiple supplementary performance is permissible. If the supplementary performance fails, the purchaser can, at his option, reduce the purchase price appropriately, or withdraw from the contract, or demand compensation for damages or reimbursement of wasted expenditure under the statutory conditions.\n' +
                        '\n' +
                        '§ 9 REVOCATION OF CONTRACTUAL STATEMENTS\n' +
                        'Cancellation\n' +
                        'Consumers have a fourteen-day withdrawal.\n' +
                        '\n' +
                        '\n' +
                        'Withdrawal\n' +
                        '\n' +
                        'You have the right to withdraw from this contract within fourteen days without giving any reason.\n' +
                        'The cancellation period is fourteen days from the day on which you or a third party named by you, who is not the carrier, has or has taken possession of the goods.\n' +
                        'To exercise your right of withdrawal, you must (Mozzaik GmbH, Else-Lasker-Schüler-Str. 69, Wuppertal - 42107, info@mozzaik.de, phone: 0202-28323333) by means of a clear statement (eg letter sent by post, fax or e-mail) about your decision to cancel this contract. You can use the attached model withdrawal form, which is not required.\n' +
                        'In order to maintain the cancellation period, it is sufficient for you to send the notification of the exercise of the right of withdrawal before the expiry of the withdrawal period.\n' +
                        '\n' +
                        '\n' +
                        'Consequences of the cancellation\n' +
                        '\n' +
                        'If you withdraw from this Agreement, we have selected all payments we have received from you, including delivery charges (except for the additional costs arising from choosing a different delivery method than the most favorable standard delivery we offer have to repay immediately and at the latest within fourteen days from the date on which the notification of your revocation of this contract has reached us. For this repayment, we will use the same means of payment as you used in the original transaction, unless expressly agreed otherwise with you; In no case will you be charged for this repayment fees. We may refuse repayment until we have received the goods back or until you have provided proof that you have returned the goods, whichever is the earlier.\n' +
                        'You must return the goods to us immediately and in any event not later than fourteen days from the date on which you inform us of the cancellation of this contract. The deadline is met if you send the goods before the deadline of fourteen days. You bear the immediate costs of returning the goods. You only have to pay for a possible loss in value of the goods, if this loss of value is due to a handling that is not necessary for the examination of the nature, characteristics and functioning of the goods.\n' +
                        '\n' +
                        '\n' +
                        'Model withdrawal form\n' +
                        '\n' +
                        '(If you want to cancel the contract, please fill in this form and send it back.)\n' +
                        '- To Mozzaik GmbH, Else-Lasker-Schüler-Str. 69, Wuppertal - 42107, info@mozzaik.de\n' +
                        '- I / we (*) hereby revoke the contract concluded by me / us (*) for the purchase of the following goods (*) / the provision of the following service (*)\n' +
                        '- Ordered on (*) / received on (*)\n' +
                        '- name of the consumer (s)\n' +
                        '- address of the consumer (s)\n' +
                        '- Signature of the consumer (s) (only when notified on paper)\n' +
                        '- date\n' +
                        '(*) Delete as appropriate.\n' +
                        '\n' +
                        '§ 10 EXCLUSION OF THE RIGHT OF WITHDRAWAL\n' +
                        'The right of revocation does not exist in the case of contracts for such goods, which can spoil quickly or whose expiry date would be quickly exceeded or which are not prefabricated and for the manufacture of which an individual selection or determination by the consumer is decisive or which are clearly tailored to the personal needs of the consumer , Furthermore, the right of withdrawal does not apply to contracts for the delivery of newspapers, magazines or magazines, with the exception of subscription contracts.\n' +
                        '\n' +
                        '§ 11 GENERAL INFORMATION REQUIRED UNDER § 36 CONSUMER DISPUTE RESOLUTION LAW (VSBG)\n' +
                        'MozzaikGmbH does not participate in a dispute settlement procedure within the meaning of the VSBG.\n' +
                        '\n' +
                        '\n' +
                        '§ 12 JURISDICTION AND APPLICABLE LAW\n' +
                        '1. The law of the Federal Republic of Germany applies, insofar as this is not restricted by a mandatory statutory provision of the EU member state in which the consumer has his domicile or habitual residence. However, the law on the United Nations Convention on the International Sale of Goods ("CISG") does not apply. The contract language is German.\n' +
                        '10\n' +
                        '2. For orders by merchants, legal entities of public law or special funds under public law, the place of jurisdiction for all disputes arising from or in connection with orders is Berlin Charlottenburg.\n' +
                        '\n' +
                        'Wuppertal, 01.09.2017'
                        }
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