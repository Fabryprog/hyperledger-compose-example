/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.example.basic.AccountTransfer} tx The sample transaction instance.
 * @transaction
 */
async function sampleTransaction(tx) {  // eslint-disable-line no-unused-vars

    if(tx.from.balance < tx.amount) {
      throw new Error("Insufficient funds!");
    }

	   tx.from.balance -= tx.amout;
     tx.to.balance += tx.amout;

     const assetRegistryFrom = await getAssetRegistry('org.example.basic.Account');
     await assetRegistryFrom.update(tx.from);

     const assetRegistryTo = await getAssetRegistry('org.example.basic.Account');
     await assetRegistryTo.update(tx.to);
}
